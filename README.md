# File Monitoring Service

This project includes a migration to seed the user data and a file monitoring service that allows user to upload files to Amazon S3 and enforces a limit quota for each user.

Sample data for users


Sample data for uploaded files

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
