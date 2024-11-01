# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

install:
npm i --save-dev @types/react-slick
npm install react-icons
 npm i swiper                   
  npm install react-slick slick-carousel --save
  npm i --save-dev @types/react-router-hash-link
npm install react-hook-form
npm i --save-dev @types/google-map-react




font size on infor card or page text 
Title:
 fontSize: {
              lg: "40px",
              md: "30px",
              sm: "30px",
              xs: "28px",
            },
 
Subtitle / SubtitleLink:
 fontSize: {
              lg: "30px",
              md: "22px",
              sm: "22px",
              xs: "20px",
            },
Description:
 fontSize: {
            lg: "25px",
            md: "20px",
            sm: "20px",
            xs: "18px",
          },


Action Buttom && Links color
#337f83

Main boday: px 3
Image and Text section: maxWidth: 400 px


sm and xs: between text and its image 
30px

auto scrool text for page section: PageText and WantServeSection "description" or long text section use 
maxHeight: {
            xs: "300px",
            sm: "500px",
            md: "550px",
            lg: "600px",
          },
          overflowY: "auto",
          
time & location on pageText card 
fontSize: {
            lg: "25px",
            md: "20px",
            sm: "18px",
            xs: "16px",
          }





backend
YourProject/
│
├── BKC-Web-Api/                   # Root folder for your ASP.NET Core API
│   ├── BKC.Web.Api/               # API project for controllers and routing
│   │   ├── Controllers/            # API Controllers
│   │   ├── Middleware/             # Custom middleware for auth, logging, etc.
│   │   └── Program.cs              # Entry point for the application
│   │
│   ├── BKC.Application/            # Application Layer for business logic
│   │   ├── Services/               # Application services
│   │   ├── DTOs/                   # Data Transfer Objects
│   │   └── Interfaces/             # Interfaces for services
│   │
│   ├── BKC.Domain/                 # Domain Layer for entities
│   │   ├── Models/                 # Business models (entities)
│   │   └── Enums/                  # Enums for roles, statuses, etc.
│   │
│   ├── BKC.Infrastructure/         # Infrastructure Layer for data access
│   │   ├── Data/                   # Database context
│   │   ├── Repositories/           # Repositories for data access
│   │   └── Migrations/             # Migrations for EF Core
│   │
│   ├── config/                     # Configuration files
│   ├── tests/                      # Unit tests
│   └── README.md                   # Documentation







dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Pomelo.EntityFrameworkCore.MySql
dotnet add package Microsoft.EntityFrameworkCore.Tools

// BKC.Infrastructure/Data/AppDbContext.cs
using Microsoft.EntityFrameworkCore;
using BKC.Domain.Models;

namespace BKC.Infrastructure.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; } // Add other tables as needed
        // Add more DbSets for other tables if you have more
    }
}


// BKC-Web-Api/Program.cs
// BKC-Web-Api/Program.cs
using BKC.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Configure services
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"), 
    new MySqlServerVersion(new Version(8, 0, 21))));

builder.Services.AddControllers();

var app = builder.Build();

// Configure middleware
app.UseAuthorization();
app.MapControllers();

app.Run();



Using EF Core without Migrations: Since the tables are already created in your database, you can use the DbContext to perform CRUD operations without creating migrations.

Example of Using the DbContext:

Here’s an example of how to use the DbContext in your API controller to interact with the existing Users table.
// BKC.Web.Api/Controllers/UsersController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BKC.Infrastructure.Data;
using BKC.Domain.Models;

namespace BKC.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}

YourProject/
├── BKC-Web-Api/
│   ├── Images/               # Folder for storing images
│   └── ...                   # Other project files and folders
// BKC-Web-Api/Program.cs
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Enable serving static files
app.UseStaticFiles(); // Make sure this is added before any routing

// Configure routing
app.UseAuthorization();
app.MapControllers();

app.Run();


// BKC.Web.Api/Controllers/ImagesController.cs
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using System.Threading.Tasks;

[Route("api/[controller]")]
[ApiController]
public class ImagesController : ControllerBase
{
    private readonly string _imagesFolderPath;

    public ImagesController()
    {
        // Define the path to the images folder
        _imagesFolderPath = Path.Combine(Directory.GetCurrentDirectory(), "Images");
    }

    [HttpPost("upload")]
    public async Task<IActionResult> UploadImage(IFormFile file)
    {
        if (file == null || file.Length == 0)
        {
            return BadRequest("No file uploaded.");
        }

        // Ensure the images folder exists
        if (!Directory.Exists(_imagesFolderPath))
        {
            Directory.CreateDirectory(_imagesFolderPath);
        }

        var filePath = Path.Combine(_imagesFolderPath, file.FileName);

        // Save the file
        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        // Return the URL to access the uploaded image
        var imageUrl = Url.Content($"~/Images/{file.FileName}");
        return Ok(new { Url = imageUrl });
    }
}



// appsettings.json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=YourExistingDatabaseName;User=root;Password=YourPassword;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}




// BKC.Web.Api/Controllers/UsersController.cs
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BKC.Infrastructure.Data;
using BKC.Domain.Models;

namespace BKC.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUsers), new { id = user.Id }, user);
        }
    }
}



dotnet ef migrations add InitialCreate


dotnet ef database update
