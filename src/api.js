// API module for SpoonRecipe

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 8
module.exports = API;


// API module for SpoonRecipe

class API {
    constructor() {
        this.routes = {};
    }
    
    registerRoute(path, handler) {
        this.routes[path] = handler;
    }
    
    handleRequest(method, path, data = {}) {
        if (this.routes[path]) {
            return this.routes[path](data);
        }
        return { error: 'Not found' };
    }
    
    getRoutes() {
        return Object.keys(this.routes);
    }
}

// Update 14
module.exports = API;
