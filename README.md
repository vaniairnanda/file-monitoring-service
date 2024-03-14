# File Monitoring Service

This project includes a migration to seed the user data and a file monitoring service that allows user to upload files to Amazon S3 and enforces a limit quota for each user.

ER Diagram

<img width="325" alt="Screen Shot 2024-03-14 at 11 02 11" src="https://github.com/vaniairnanda/file-monitoring-service/assets/55880424/c6fc9a9d-f553-4f62-ba64-0ff5a311343f">

Sample data for users

<img width="521" alt="Screen Shot 2024-03-14 at 11 02 03" src="https://github.com/vaniairnanda/file-monitoring-service/assets/55880424/9d4271b6-4374-40a6-a03a-23dd86b12dd8">


Sample data for uploaded files

<img width="742" alt="Screen Shot 2024-03-14 at 11 01 57" src="https://github.com/vaniairnanda/file-monitoring-service/assets/55880424/cc3f974f-66a3-457e-afc4-c43e4f7ff0c7">


## Sample API Call

Perform a POST request to upload sample test image. Please run this curl inside the terminal of this project to directly access the sample file. 

```
curl --location --request POST 'localhost:3000/upload' --header 'user-id: 2' --header 'Content-Type: multipart/form-data' --form 'files=@uploads/test_file_upload.jpeg'
```



## Sample API result
```
["File <filename1> uploaded successfully", "File <filename2> uploaded successfully"]
```
or
```
User quota limit exceeded
````

## Getting Started

1.  Copy `.env.example` to `.env` and configure the env
   
   ```
   cp .env.example .env
   ```

2. Run database via docker (or PostgreSQL in your local)

    ```bash
    docker-compose up -d
    ```

3. Migrate and seed the database using the following command
   ```
   npm run migrate

   npm run seed
   ```

4. Run the server app `npm start`

5. Run the curl command in Sample API Call
