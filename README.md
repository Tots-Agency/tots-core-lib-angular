# @tots/core

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.0.0.

`@tots/core` is the foundational library for Tots Angular packages. It provides:

- Standardized HTTP services for CRUD operations
- Query and response utilities for paginated APIs
- Core configuration through dependency injection
- Common utilities and helpers functions

---

## Installation

```bash
npm install @tots/core
```

Ensure your project uses Angular 20+ and compatible versions of TypeScript, zone.js, and rxjs.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

## Importing the module

```typescript
import { NgModule } from '@angular/core';
import { TotsCoreModule } from '@tots/core';

@NgModule({
	imports: [TotsCoreModule]
})
export class AppModule { }
```

## Configuration

```typescript
import { Injectable } from '@angular/core';
import { TotsCoreConfig } from '@tots/core';

@Injectable({
	providedIn: 'root'
})
export class AppConfig extends TotsCoreConfig {
	baseUrl = 'https://api.example.com';
	lang = 'en';
}
```

## Usage of BaseHttpService

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TotsBaseHttpService, TotsQuery } from '@tots/core';

@Injectable({
	providedIn: 'root'
})
export class UserService extends TotsBaseHttpService<User> {
	
	basePathUrl = '/users';

	constructor(http: HttpClient, config: TotsCoreConfig) {
		super(config, http);
	}
}

// Query users
const totsQuery = new TotsQuery();

userService.list(totsQuery).subscribe(
	(response:TotsListResponse<User>) => {
		console.log(response.data);
	}
);
```