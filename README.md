# Project Introduction : Jewelry Sales System At The Store

## Contents
- [Project Description](#project-description)
- [Illustrative Images](#illustrative-images)
- [Major Features (Epics)](#major-features-epics)
- [Technologies Used](#technologies-used)
- [Team Member Assignment Table](#team-member-assignment-table)
  - [Table 1: User Stories of Each Sprint](#table-1-user-stories-of-each-sprint)
  - [Table 2: Member Assignment for Sprint 1](#table-2-member-assignment-for-sprint-1)

## Project Description
The software is designed to manage jewelry sales for a company operating a single store with multiple counters. It handles order creation, invoicing, and warranty slip printing. Products can be inputted via barcode scanning or direct code entry. The software supports pricing calculations based on gold price, labor costs, and stone prices, along with promotional management and customer-specific discounts.

## Major Features (Epics)
- **User Management**: Includes functionalities like login, logout, password reset.
- **Account Management**: View account, create account, edit account, and delete account.
- **Profile Management**: View and update profile.
- **Staff Management**: Search, create, edit, and delete staff members.
- **Billing and Sales**: Create bill, update bill and export bill.
- **Promotion Management**: View, create, update, and delete promotions.
- **Customer Interaction**: View Customer Purchase History and Input Customer Info.
- **Product Management**: Import Product by Barcode, Import Product by Product Code, Remove Product out of Bill, Add Product to Stall, Buy Old Products, Update Product in Stall and View Product in Stall.
- **Store and Stall Management**: Add, update stall.
- **Policy Management**: View Return and Exchange Policy and Edit Return and Exchange Policy.
- **Statistics and Reports**: View Each Stall's Revenue, View Each Stall's Orders Statistics, View Each Stall's Product Report, View Revenue of All Stalls, View Staff Statistics, View Orders Statistics and View Products Statistics.

## Technologies Used
- **Backend**:
  - Swagger
  - Spring Security
  - Sending Email
  - Sending OTP via mail
  - Spring Data JPA
  - MySQL Database
  - MultipartFile
  - Barbecue (barcode 1D Generator)
  - Metal Price API to update gold price
- **Frontend**:
  - React Js
  - CoreUI React template
  - Quill React JS

## Team Member Assignment Table

### Table 1: User Stories of Each Sprint
| Sprint   | Description                |
|----------|----------------------------|
| Sprint 1 | Login                      |
|          | Logout                     |
|          | Reset Password             |
|          | View Account               |
|          | Create Account             |
|          | Edit Account               |
|          | Delete Account             |
| Sprint 2 | View Profile               |
|          | Update Profile             |
|          | Search Staff               |
|          | Create Staff               |
|          | Edit Staff                 |
|          | Delete Staff               |
|          | View Promotion             |
|          | Create Promotion           |
|          | Update Promotion           |
|          | Delete Promotion           |
|          | View Policies              |
|          | Edit Policies              |
|          | Delete Policies            |
|          | Create Orders              |
|          | Update Orders              |
|          | Delete Orders              |
|          | View Orders                |
| Sprint 3 | Print bill from Order      |
|          | Export bills               |
|          | Import product by barcode  |
|          | Apply Promotion to Order   |
|          | Add stall                  |
|          | Update stall               |
|          | View stall                 |
|          | Add customers              |
|          | Update customers           |
|          | Delete customers           |
|          | View customers             |
| Sprint 4 | Add Product to Stall       |
|          | Edit Product               |
|          | View Products in Stall     |
|          | Delete Product             |
|          | Product Dashboard          |
|          | Staff Dashboard            |
|          | Revenue Dashboard          |
|          | Create Policies            |
|          | Orders Dashboard           |

### Table 2: Member Assignment for Sprint 1
| Member Name | Description            |
|-------------|------------------------|
| Do Trong Minh    | Login                  |
| Le Thu An    | Logout                 |
| Do Trong Minh    | Reset Password         |
| Tran Duy    | View Account           |
| Chau Ngoc Anh Tri    | Create Account         |
| Tran Duc Tri    | Edit Account           |
| Doan Tran Quang Nhut    | Delete Account         |

