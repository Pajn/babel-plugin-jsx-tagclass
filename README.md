This transformer will add a className attribute to JSX elements set to the property named the same
as the component from the styles object if a styles object exists in scope.

For example
<Link /> will be transformed to <Link className={styles.Link} /> if styles exist in scope.
