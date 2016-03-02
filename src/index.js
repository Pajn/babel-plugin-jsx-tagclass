import generate from 'babel-generator';
import template from "babel-template";

export default function ({ types: t }) {
  return {
    inherits: require('babel-plugin-syntax-jsx'),
    visitor: {
      JSXElement({scope, node}) {
        const identifier = node.openingElement.name;
        const name = identifier.name || identifier.property.name;

        if (/^[A-Z]/.test(name) && scope.hasBinding('styles')) {
          const className = node.openingElement.attributes.find(attr => attr.name.name === 'className');

          if (!className) {
            node.openingElement.attributes.push(
              t.jSXAttribute(
                t.jSXIdentifier('className'),
                t.jSXExpressionContainer(
                  t.memberExpression(t.identifier('styles'), t.identifier(name))
                )
              )
            );
          }
        }
      }
    }
  };
}
