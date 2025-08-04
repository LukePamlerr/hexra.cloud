# DeveloperBalance

DeveloperBalance is a cross-platform open-source app for managing developer projects, tasks, and categories. Built with .NET MAUI, it runs on Android, iOS, Windows, MacCatalyst, and Tizen.

## Features

- Project and task management
- Category and tag organization
- Charts and statistics
- Responsive UI for mobile and desktop
- Sample data for quick start

## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Visual Studio 2022+](https://visualstudio.microsoft.com/) (Windows/Mac) or [VS Code](https://code.visualstudio.com/) with C# extension
- Android/iOS/Mac/Windows/Tizen emulator or device

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/dotnet/maui-samples.git
cd maui-samples/9.0/Apps/DeveloperBalance
```

### 2. Restore Dependencies

```sh
dotnet restore
```

### 3. Build the App

```sh
dotnet build
```

### 4. Run on Your Platform

- **Android:**
  ```sh
  dotnet build -t:Run -f net8.0-android
  ```
- **Windows:**
  ```sh
  dotnet build -t:Run -f net8.0-windows10.0.19041.0
  ```
- **MacCatalyst:**
  ```sh
  dotnet build -t:Run -f net8.0-maccatalyst
  ```
- **iOS:**
  ```sh
  dotnet build -t:Run -f net8.0-ios
  ```
- **Tizen:**
  ```sh
  dotnet build -t:Run -f net8.0-tizen
  ```

### 5. Open in Visual Studio (Optional)

- Open `DeveloperBalance.sln` in Visual Studio for full IDE support.

### 6. Explore Features

- Add/edit/delete projects and tasks
- Organize with categories and tags
- View charts and statistics

## Contributing

1. Fork the repo and create your branch.
2. Make changes and commit.
3. Push and open a pull request.

## License

MIT License

## Resources

-