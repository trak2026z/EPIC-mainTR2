graph TD
    A[index.js] --> B[views/Root.js]
    B --> C[components/templates]
    C --> D[components/organisms]
    D --> E[components/molecules]
    E --> F[components/atoms]
    
    B --> G[assets/styles/globalStyle.js]
    B --> H[assets/styles/theme.js]
    
    A --> I[index.css]
    B --> J[utils/utils.js]

    subgraph Assets
        G
        H
        K[assets/logo.svg]
    end

    subgraph Components
        F
        E
        D
        C
    end

    subgraph Views
        B
        L[views/App.css]
    end

    subgraph Utils
        J
    end
