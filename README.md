dotnet clean arch
- https://github.com/yanpitangui/dotnet-api-boilerplate


Example 
https://github.com/kriscfoster/typescript-dependency-injection

nestjs

# Decorator

- @controller()
- @httpGet()
- @httpPost()
- @httpPut()
- @httpDelete()

- @use() -- middleware

Express Router decorators: Get, Post, Put, Delete, Use, Controller
Express Middleware
Use for Express Middleware
Support multiple middleware, e.g. @Use(validateAuth, validateRole) (validateAuth, validateRole is the custom middlewares)
Basic HttpException
Basic middleware for validating the request, validateType using class-validator
built-in http-status-codes


ControllerBase

```c#
 public async Task<ActionResult<GetHeroDto>> Update(Guid id, [FromBody] UpdateHeroDto dto)
        {

            var updatedHero = await _heroAppService.UpdateHero(id, dto);
            if (updatedHero == null) return NotFound();
            return NoContent();
        }
```

FromBody
https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.frombodyattribute?view=aspnetcore-6.0

http-status-codes
https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.statuscodes?view=aspnetcore-6.0

ActionResult
- NoContent
- NotFound


# Alternative Express Controller Utils

- https://github.com/typestack/routing-controllers (TypeDI)
- https://github.com/inversify/inversify-express-utils (inversify)
- https://github.com/jeffijoe/awilix-express (awilix)
