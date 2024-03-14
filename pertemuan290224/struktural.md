- Menginstall nmp init -y
- Selanjutnya ubah main pada package json dari index.js menjadi app.js
- buat file app.js
- Buat folder db/connection.js
- Menginstall npm install express body-parser mysql2 cors
- Menginstall npm i -g nodemon / --save .gitignore
- konfigurasi db/connection.js ke mysql ()
- buat database baru dengan nama smk_bazma_todo
- configurasi app.js
- Buat table todo: id, title, description 
create table todo (
    -> id int primary key auto_increment,                           
    -> title varchar(255) not null,
    -> description text);
- Jalankan nodemon
- Konfigurasi membaca file todo rest api ()
- Menjalankan get todos menggunakan thunder client () 
- Konfigurasi menambahkan data todo rest api ()
- Menjalankan menambahkan data baru todo rest api menggunakan thunder clients () 
- Setting Headers = Accept = application/json
- Membuat content-type = application/json
- Membuat validation untuk mengirim data todo yang wajib diisikan, artinya validasi tersebut harus jalan dengan npm collection
- Melakukan validation ketika di update datanya tidak boleh
"title.required" : "Title wajib diisi" 
"title.min" : "Title minimal 1 karakter"
"title.max" : "Title maksimal 255 karakter"
- konfigurasi mengubah data todo bedasarkan id rest api menggunakan thunder clients
- konfigurasi menghapus data todo bedasarkan id rest api menggunakan thunder clients
- konfigurasi bug affectedRow menjadi length
- membuat forder Helper
 - Membuat file response.js