# Express-swagger-autoconfigure

[![License](https://img.shields.io/badge/license-GNU%20V3.0-orange)](https://github.com/JoaoVictorLacerda/express-swagger-autoconfigure/blob/main/license)
[![npm version](https://img.shields.io/npm/v/npm-package.svg?style=flat)](https://www.npmjs.com/package/express-swagger-autoconfigure)

Manage route configurations for your express application automatically and generate automatic documentation with swagger.

## Installation and Usage
```jsx
npm i express-swagger-autoconfigure
```
Add the property below to your file **tsconfig.json**.
```json
{
    "compilerOptions": {
        //...
        "experimentalDecorators": true
        //...
    }
}
```
## Documentation
Below is a walkthrough of all available decorators

### Frist Configuration:
* **@SwaggerInitializer** - Loads Swagger in your express application  | String
* **@SwaggerEndpoint** - Defines the path to access documentation | String
* **@ApiDefaultPath** - Defines the main path of your API | String
* **@Description** - Describes your application within documenta*tion | String
* **@Title** - Puts a title on your documentation | String
* **@Version** - Defines API version | String
* **@BearerTokenJWT** - Defines if the API uses JWT Tokens as a security mechanism | Boolean
* **@ExpressInitializer** - Initializes an express app and configures its routes

### Second Configuration
* **@Controller** - Specifies a controller within the express context | String

### Third Configuration
* **@Get** - Specifies GET type endpoints  | String, middlewares
* **@Post** - Specifies POST type endpoints | String, middlewares
* **@Delete** - Specifies DELETE type endpoints | String, middlewares
* **@Patch** - Specifies PATCH type endpoints | String, middlewares
* **@Put** - Specifies PUT type endpoints | String, middlewares

### Fourth Configuration
* **@StatusResponse** - Adds HTTP response codes and description | number
* **@Body** - Adds a Body as a request object | Object
* **@ParamPath** - Adds a ParamPath as a request object | Object
* **@FormData** - Adds a FormData as a request objet | Object. Utilize *FormDataTypes* for grant types
* **@Header** - Adds a Header as a request objet | object
* **@Query** - Adds a Query as a request objet | object
* 
### Themes
To configure the themes, use
* **@Theme** - Specifies Theme type of Swagger | If not specified, use default swagger theme
    * ThemesType.FEELING_BLUE
    * ThemesType.FLATTOP
    * ThemesType.MATERIAL
    * ThemesType.MONOKAI
    * ThemesType.MUTED
    * ThemesType.NEWS_PAPER
    * ThemesType.OUTLINE

## Usage

### Express Configuration
```javascript
import  { Express,  } from "express";
import cors from "cors";
import {BasePath,
    BearerTokenJWT,
    Description,
    SwaggerInitializer,
    Title,
    Version,
    ExpressInitializer} from "express-swagger-autoconfigure";

// Configure a class with the first configuration
@SwaggerInitializer
@SwaggerEndpoint("/documentation") // swagger documentation will be available on http://localhost:5000/documentation (Optional, default /)
@ApiDefaultPath("/api") // swagger request to http://localhost:5000/api/endpoint | (Optional, default /)
@Description("Essa api é responsável pelo exemplo de utilização do express-swagger-autoconfigure")
@Title("Example-of-express-swagger-autoconfigure")
@Version("1.0.0")
@BearerTokenJWT(true)
@Theme(ThemesType.FEELING_BLUE)
export default class App {

    @ExpressInitializer
    private app: Express;

    constructor () {
        this.configApp();
        this.initControllers();
    }

    private configApp():void {
        this.app.use( cors() );
    }

    private initControllers(){
        // It is important to instantiate all of your controllers
        // in this class so that the decorators can be applied.
        new MyController1();
        new MyController2();
    }
    public getApp(): Express {
        return this.app;
    }
}
```
### Controller Configuration
```javascript
@Controller("/controller1")
export default class MyController1 {
    
    //health-check
    @StatusResponse(200, "Check API successfully")
    @StatusResponse(400,"Check API unsuccessfully")
    @Get() // It is important to put the Http Method Decorator as the first configuration.
    public check(request: Request, response: Response): Promise<Response> {

        //... implementation

    }
}
```
```javascript
@Controller("/controller2")
export default class MyController2 {
    
    
    @StatusResponse(202) // if you dont pass description, express-swagger-autoconfigure add for you 
    @StatusResponse(400) // if you dont pass description, express-swagger-autoconfigure add for you 
    @Body({email:"Description", password:"Description"})
    @Post("/login")// It is important to put the Http Method Decorator as the first configuration.
    public login( request: Request, response: Response): Promise<Response> {
       //... implementation
    }
    
    @StatusResponse(200) // if you dont pass description, express-swagger-autoconfigure add for you 
    @StatusResponse(400)// if you dont pass description, express-swagger-autoconfigure add for you 
    @Get("/", authorizationMiddleware)// It is important to put the Http Method Decorator as the first configuration.
    public read(request: Request, response: Response): Promise<Response> {
        //... implementation
    }

    @StatusResponse(200)// if you dont pass description, express-swagger-autoconfigure add for you 
    @StatusResponse(400)// if you dont pass description, express-swagger-autoconfigure add for you 
    @ParamPath({uuid: "Description"})
    @Get("/find-by-uuid/{uuid}", authorizationMiddleware)// It is important to put the Http Method Decorator as the first configuration.
    public findByUuid(request: Request, response: Response): Promise<Response> {
        //... implementation
    }

    @StatusResponse(200)// if you dont pass description, express-swagger-autoconfigure add for you 
    @StatusResponse(400)// if you dont pass description, express-swagger-autoconfigure add for you 
    @Body({
        name : "Description",
        email : "Description",
        password: "Description"
    })
    // Default = "/" 
    @Post() // It is important to put the Http Method Decorator as the first configuration.
    public create(request: Request, response: Response): Promise<Response> {
        //... implementation
    }
    
    @StatusResponse(200)// if you dont pass description, express-swagger-autoconfigure add for you 
    @StatusResponse(400)// if you dont pass description, express-swagger-autoconfigure add for you 
    @Query({
        uuid:"Description"
    })
    // Default = "/" 
    @Post("/query-profile") // It is important to put the Http Method Decorator as the first configuration.
    public queryProfile(request: Request, response: Response): Promise<Response> {
        //... implementation
    }

    @StatusResponse(200)// if you dont pass description, express-swagger-autoconfigure add for you 
    @StatusResponse(400)// if you dont pass description, express-swagger-autoconfigure add for you 
    @Header({
        profileType:"Description"
    })
    // Default = "/" 
    @Post("/type-profile") // It is important to put the Http Method Decorator as the first configuration.
    public headerProfile(request: Request, response: Response): Promise<Response> {
        //... implementation
    }

    @StatusResponse(200)// if you dont pass description, express-swagger-autoconfigure add for you 
    @StatusResponse(400)// if you dont pass description, express-swagger-autoconfigure add for you 
    @FormData({
        img: FormDataTypes.FILE,
        name: FormDataTypes.STRING,
        rules: FormDataTypes.ARRAY,
        age: FormDataTypes.NUMBER,
        isMarried:FormDataTypes.BOOLEAN

    })
    // Default = "/" 
    @Post("/create-profile") // It is important to put the Http Method Decorator as the first configuration.
    public createProfile(request: Request, response: Response): Promise<Response> {
        //... implementation
    }
}
```

## Theme examples
* **FEELING_BLUE**
![alt text](themesIMG/FEELING_BLUE.png)
* **FLATTOP**
![alt text](themesIMG/FLATTOP.png)
* **MATERIAL**
![alt text](themesIMG/MATERIAL.png)
* **MONOKAI**
![alt text](themesIMG/MONOKAI.png)
* **MUTED**
![alt text](themesIMG/MUTED.png)
* **NEWS_PAPER**
![alt text](themesIMG/NEWS_PAPER.png)
* **OUTLINE**
![alt text](themesIMG/OUTLINE.png)

## Example
[Example-of-express-swagger-autoconfigure](https://github.com/JoaoVictorLacerda/Example-of-express-swagger-autoconfigure/tree/main).

## Contributing

You can download the code and help develop more features.  
A more robust architecture is also necessary.  
To contribute, simply open a pull request with your changes; if it makes sense, it will be approved.

## License
This project is licensed under the license. [GNU AFFERO GENERAL](https://github.com/JoaoVictorLacerda/express-swagger-autoconfigure/blob/main/license).

## Contact
_victorqueiroz90@outlook.com_
