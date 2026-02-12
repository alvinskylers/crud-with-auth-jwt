# Project Setup
### Clone Git Repo

```bash
git clone https://github.com/alvinskylers/crud-with-auth-jwt
```

### Compile Project

move to project directory
```bash
cd crud-with-auth-jwt
```

install dependencies
```bash
npm install 
```

### Start Project

```bash
npm run start:dev
```

**Project should be running on localhost:3000**

<br>

# API Endpoints

## /auth/register
**Http Method:** `POST`  
**Description:** Registers a new user in the system.

#### Request Body
| Field    | Type   | Description            |
| :------- | :----- | :--------------------- |
| name     | String | Not Empty              |
| email    | String | Valid email address    |
| password | String | Minimum 8 characters   |

**Request Example:**
```json
{
	"name": "John Pork",
	"email": "johnpork@mail.com",
	"password": "secure123"
}
```
**Success Response:**

```json
{
	"id": "886907c2-77f2-4806-a34a-03cbf604d3cb",
	"email": "johnpork@mail.com",
	"name": "John Pork",
	"role": "USER",
	"createdAt": "2026-02-12T03:27:24.001Z",
	"updatedAt": "2026-02-12T03:27:24.001Z"
}
```
<br>

## /auth/login
**Http Method:** `POST`  
**Description:** Logs a registered user in the system.

#### Request Body
| Field    | Type   | Description            |
| :------- | :----- | :--------------------- |
| email    | String | Valid email address    |
| password | String | Minimum 8 characters   |

**Request Example:**
```json
{
	"email": "johnpork@mail.com",
	"password": "secure123"
}
```
**Success Response:**

```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YjUyMTQ2Zi01ZmNiLTRmMTItODE5NS0wYzBlYjM4MDY2YmQiLCJlbWFpbCI6ImpvaG5wb3JrQG1haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NzA4Njg1ODIsImV4cCI6MTc3MTQ3MzM4Mn0.pSU8AVl1YE4LY9uV_mMD1sZhHHWIMFbgyAr51gHWRok",
	"refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YjUyMTQ2Zi01ZmNiLTRmMTItODE5NS0wYzBlYjM4MDY2YmQiLCJlbWFpbCI6ImpvaG5wb3JrQG1haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NzA4Njg1ODIsImV4cCI6MTc3MjA3ODE4Mn0.EQmVsKnjXWRDXVx7R_K-I8WSmnPlewsfZSpTIVl2xHk"
}
```
<br>

## /auth/refresh
**Http Method:** `POST`  
**Description:** Refreshes the JWT token from a logged in user.

#### Request Body
| Field        | Type   | Description|
| :-------     | :----- | :----------|
| refreshToken | String | Not Empty  |


**Request Example:**
```json
{
	"refreshToken" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YjUyMTQ2Zi01ZmNiLTRmMTItODE5NS0wYzBlYjM4MDY2YmQiLCJlbWFpbCI6ImpvaG5wb3JrQG1haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NzA4NjQ3NDYsImV4cCI6MTc3MjA3NDM0Nn0.0Ia1znhYe1VR32KNjLmzO__zJWbq92-TB9EP9Kyrk7Q"
}
```
**Success Response:**

```json
{
	{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YjUyMTQ2Zi01ZmNiLTRmMTItODE5NS0wYzBlYjM4MDY2YmQiLCJlbWFpbCI6ImpvaG5wb3JrQG1haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NzA4NjQ5MzMsImV4cCI6MTc3MTQ2OTczM30.pl31dNjurO0lNrz3kljwy6vWiBXkbhr-DH3aGR3hefM",
	"refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YjUyMTQ2Zi01ZmNiLTRmMTItODE5NS0wYzBlYjM4MDY2YmQiLCJlbWFpbCI6ImpvaG5wb3JrQG1haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NzA4NjQ5MzMsImV4cCI6MTc3MjA3NDUzM30.-SYw51oYjXb50dFxXa-DbIQB_BPPJyjabsQtQSC2cy4"
  }
}
```
<br>

## /products
**Http Method:** `GET`  
**Description:** Grabs all the products from the database.

#### Request Body
| Field    | Type   | Description            |
| :------- | :----- | :--------------------- |
| -        | -      | -                      |


**Request Example:**
```json
{
	
}
```
**Success Response:**

```json
{
	{
		"id": "d48e691d-5cee-4d71-9558-9e4e2e2cdf1a",
		"name": "Lunar Series Mechanical Keyboard",
		"description": "Tenkeyless design with tactile brown switches and white backlighting.",
		"price": 89.99,
		"createdAt": "2026-02-12T09:00:00.000Z",
		"updatedAt": "2026-02-12T09:00:00.000Z"
	},
	{
		"id": "6e00cdd1-ff3e-4501-b9fa-b7fde6452b58",
		"name": "Titanium Desk Mat",
		"description": null,
		"price": 35,
		"createdAt": "2026-02-12T09:30:00.000Z",
		"updatedAt": "2026-02-12T09:30:00.000Z"
	},
}
```
<br>

## /products/{id}
**Http Method:** `GET`  
**Description:** Grabs a product from the database based on the given {id}s.

#### Request Body
| Field    | Type   | Description            |
| :------- | :----- | :--------------------- |
| -        | -      | -                      |


**Request Example:**
```json
{
	
}
```
**Success Response:**

```json
{
	"id": "98f40a07-3d96-4c46-a24d-51ded1839534",
	"name": "Apex Wireless Plate",
	"description": "Ultra-lightweight 54g chassis with a mog maxing feature.",
	"price": 129.5,
	"createdAt": "2026-02-12T09:15:00.000Z",
	"updatedAt": "2026-02-12T09:15:00.000Z"
}
```
<br>


## /products/
**Http Method:** `POST`  
**Description:** Creates a new product entry in the database

#### Request Body
| Field       | Type   | Description            |
| :-------    | :----- | :--------------------- |
| name        | String | Not Empty              |
| description | String | Valid email address    |
| price       | Number | floating point numbers |
| createdAt   | Date   | Date Timestamp         |
| updatedAt   | Date   | Date Timestamp         |



**Request Example:**
```json
{
	"name": "Brick",
	"description": "Ultra-lightweight 300kg stone brick.",
	"price": 9999.9999,
	"createdAt": "2026-01-12T09:15:00.000Z",
	"updatedAt": "2026-01-12T09:15:00.000Z"
}
```
**Success Response:**

```json
{
  "status" : "success",
  "message" : "product successfully created",
  "data" : {
    "id": "45d65472-f029-46aa-a660-d6fdbd8d4ad3",
    "name": "Brick",
    "description": "Ultra-lightweight 300kg stone brick.",
    "price": 9999.9999,
    "createdAt": "2026-01-12T09:15:00.000Z",
    "updatedAt": "2026-01-12T09:15:00.000Z"
  }
}
```
<br>

## /products/{id}
**Http Method:** `PUT`  
**Description:** Updates an existing product entity in the database based on the given {id}

#### Request Body
| Field       | Type   | Description            |
| :-------    | :----- | :--------------------- |
| uuid        | String | Not Null, Not Empty    |
| name        | String | Not Empty              |
| description | String | Valid email address    |
| price       | Number | floating point numbers |
| createdAt   | Date   | Date Timestamp         |
| updatedAt   | Date   | Date Timestamp         |



**Request Example:**
```json
{
	"id": "98f40a07-3d96-4c46-a24d-51ded1839534",
	"name": "Apex Wireless Plate",
	"description": "Ultra-lightweight 54g chassis with a mog maxing feature.",
	"price": 129.5,
	"createdAt": "2026-02-12T09:15:00.000Z",
	"updatedAt": "2026-02-12T09:15:00.000Z"
}
```
**Success Response:**

```json
{
  "status" : "success",
  "message" : "product successfully updated",
  "data" : {
    "id": "98f40a07-3d96-4c46-a24d-51ded1839534",
    "name": "Apex Wireless Plate",
    "description": "Ultra-lightweight 54g chassis with a mog maxing feature.",
    "price": 129.5,
    "createdAt": "2026-02-12T09:15:00.000Z",
    "updatedAt": "2026-02-12T09:15:00.000Z"
  }
}
```
<br>

## /products/{id}
**Http Method:** `DELETE`  
**Description:** Deletes a product from the database based on the given {id}.

#### Request Body
| Field    | Type   | Description            |
| :------- | :----- | :--------------------- |
| -        | -      | -                      |


**Request Example:**
```json
{
	
}
```
**Success Response:**

```json
{
  "status" : "success",
  "message" : "product successfully deleted",
  "data" : {
    "id": "98f40a07-3d96-4c46-a24d-51ded1839534",
    "name": "Apex Wireless Plate",
    "description": "Ultra-lightweight 54g chassis with a mog maxing feature.",
    "price": 129.5,
    "createdAt": "2026-02-12T09:15:00.000Z",
    "updatedAt": "2026-02-12T09:15:00.000Z"
  }
}
```
<br>