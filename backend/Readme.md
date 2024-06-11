ALL ROUTES START WITH /api

### DB Diagram

![](dbdiagram.png)

### Authentication Endpoints

The Authentication flow for the application is:

### User Signup/Login

| METHOD | ENDPOINT     | TOKEN | ROLE | DESCRIPTION | POST PARAMS                  | RETURNS                                |
| ------ | ------------ | ----- | ---- | ----------- | ---------------------------- | -------------------------------------- |
| POST   | /auth/signup | -     | user | User Signup | `name`, `email`, `password`, | { message: `string`, result: `token` } |
| POST   | /auth/login  | -     | user | User Login  | `email`, `password`          | { message: `string`, result: `token` } |

### User Endpoints

| METHOD | ENDPOINT       | TOKEN | ROLE  | DESCRIPTION         | POST PARAMS                                  | RETURNS                                 |
| ------ | -------------- | ----- | ----- | ------------------- | -------------------------------------------- | --------------------------------------- |
| GET    | /user/profile  | YES   | user  | Get Own Profile     |                                              | { message: `string`, result: `object` } |
| PUT    | /user/profile  | YES   | user  | Update Own Profile  | `name`, `email`,`phone`                      | { message: `string`, result: `object` } |
| PUT    | /user/password | YES   | user  | Update Own password | `old password`, `new password`               | { message: `string`, result: `object` } |
| GET    | /user          | YES   | admin | Get All Users       |                                              | { message: `string`, result: `array` }  |
| GET    | /user/:id      | YES   | admin | Get One User        |                                              | { message: `string`, result: `object` } |
| PUT    | /user/:id      | YES   | admin | Update One User     | `name`, `email`, `phone`, `password`, `role` | { message: `string`, result: `object` } |
| POST   | /user          | YES   | admin | Create One User     | `name`, `email`, `phone`, `password`, `role` | { message: `string`, result: `object` } |

## Appoinments Endpoints

| METHOD | ENDPOINT         | TOKEN | ROLE  | DESCRIPTION                 | POST PARAMS                                                         | RETURNS                                 |
| ------ | ---------------- | ----- | ----- | --------------------------- | ------------------------------------------------------------------- | --------------------------------------- |
| GET    | /appointment     | YES   | user  | Get all of own appointments |                                                                     | { message: `string`, result: `object` } |
| GET    | /appointment/:id | YES   | user  | Get one appointment         |                                                                     | { message: `string`, result: `object` } |
| PUT    | /appointment/:id | YES   | user  | Update one appointment      | `doctor_info_id`, `date`, `time`, `observations`, `patient_info_id` | { message: `string`, result: `object` } |
| GET    | /appointment     | YES   | admin | Get All Users               |                                                                     | { message: `string`, result: `array` }  |
| GET    | /appointment/:id | YES   | admin | Get One User                |                                                                     | { message: `string`, result: `object` } |
| PUT    | /appointment/:id | YES   | admin | Update One User             | `name`, `email`, `password`, `role`                                 | { message: `string`, result: `object` } |
| POST   | /appointment     | YES   | admin | Create One User             | `name`, `email`, `password`, `role`                                 | { message: `string`, result: `object` } |

## Doctor_info Endpoints

| METHOD | ENDPOINT         | TOKEN | ROLE  | DESCRIPTION            | POST PARAMS                 | RETURNS                                 |
| ------ | ---------------- | ----- | ----- | ---------------------- | --------------------------- | --------------------------------------- |
| GET    | /doctor_info     | YES   | admin | Get All doctors info   |                             | { message: `string`, result: `array` }  |
| GET    | /doctor_info/:id | YES   | admin | Get One doctor info    |                             | { message: `string`, result: `object` } |
| PUT    | /doctor_info/:id | YES   | admin | Update One doctor info | `doctor_id`, `specialty_id` | { message: `string`, result: `object` } |
| POST   | /doctor_info     | YES   | admin | Create One doctor info | `doctor_id`, `specialty_id` | { message: `string`, result: `object` } |

## Specialties Endpoints

| METHOD | ENDPOINT       | TOKEN | ROLE  | DESCRIPTION          | POST PARAMS | RETURNS                                 |
| ------ | -------------- | ----- | ----- | -------------------- | ----------- | --------------------------------------- |
| GET    | /specialty     | YES   | admin | Get All specialties  |             | { message: `string`, result: `array` }  |
| GET    | /specialty/:id | YES   | admin | Get One specialty    |             | { message: `string`, result: `object` } |
| PUT    | /specialty/:id | YES   | admin | Update One specialty | `name`      | { message: `string`, result: `object` } |
| POST   | /specialty     | YES   | admin | Create One specialty | `name`      | { message: `string`, result: `object` } |
