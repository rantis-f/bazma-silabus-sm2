## Pertemuan 1
### Cara membuat database baru

Buka terminal, lalu ketikan 'mysql -u root -p' dan passwordnya (enter aja)

Default mysql adalah username: root dan password: (kosong) 

### Cara membuat database baru
Berikan kode yang ada di module dengan cara 'create databases nama_database';

### Membuat table baru dengan nama biodata dan column nya
-id,nama,kelas,jurusan,umur

-id int primary key not null
-nama varchar(255)
-kelas varchar(20)
-jurusan varchar(255)
-umur int

### Lihat data biodata
Dapat mengunakan query desc biodata
Dapat juga mengunakan select * from biodata

### Membuat data baru pada tabel biodata
Disini akan menambahkan data baru denganquery berikut:

insert into biodata (id,nama,kelas,jurusan,umur) values(1,'Attar','XI','SIJA',16)


### Mencari berdasarkan id
Disini menggunakan query:

select * from biodata where = ?

Kita akan memfilter data berdasarkan kelas

select * from biodata where kelas = 'XI'

### Update data berdasarkan id
Update biodata SET NAMA='...' WHERE ID = ?

delete from biodata where id=7; 

Buatlah sebuah table dengan nama "sekolahan", didalam table sekolahan, terdapat beberapa kolum: id, nama_sekolah, jurusan,kapasitas_siswa, alamat. Buatlah sebanyak 10 data dengan berbagai jenis jurusan dan kapasitas_siswa;

## Order By
- Desending => dimulai dari tulisan z-a / is/ created_at
- Ascending => dimulai dari tulisan a-z / id / created_at

### LIMIT
select * from sekolahan limit 3;
select * from sekolahan order by condition limit 3;

-- dari huruf a
select * from sekolahan where field like 'a%';

### aliaes
select fields as asfield

mysql> create table perpustakaan(
    -> id int primary key auto_increment not null,
    -> judul varchar(400)
    -> ,                     
    -> kategory varchar(255),
    -> deskripsi text,
    -> penulis varchar(255),
    penerbit varchar(255)
    -> tahun_terbit int,      
    -> jumlah_halaman int,
    -> batas_umur int,
    -> isbn int,
    -> harga int)
    -> ;


insert into perpustakaan (judul,kategory,deskripsi,penulis,penerbit,tahun_terbit,jumlah_halaman,batas_umur,isbn,harga) values ('Belajar HTML dan CSS dasar', 'coding','Belajar pemrograman dasar dari kecil','Jamal','Coding Hits',2024,224,10,12345678,5000), ("Belajar CSS Dasar", "Coding", "Belajar styling dari dasar", "Asep", "Coding Hits", 2024, 220, 10, 234567890, 8000), ("Belajar JavaScript Dasar", "Coding", "Belajar logika dari dasar", "Bayu", "Coding Brew", 2023, 250, 10, 098765432, 10000);

insert into perpustakaan (judul, kategory,deskripsi,penulis,penerbit,tahun_terbit,jumlah_halaman,batas_umur,isbn,harga) values ('Pulang', 'Novel','Tentang shadow economy','Tere Liye','Gramedia',2021,400,20,01234567, 20000), ("Pergi", "Novel", "Dunia Shadow Economy", "Tere Liye", "Gramedia", 2021, 440, 20, 134567890, 30000);

1. Filtering data (where)
2. Cari data dengan (like) = judul, kategori, penulis
3. Data id Desc
4. Filtering jumlah halaman >= & < & = (bebas)
5. Tahun terbit >= 2020 =< 2026
6. Batas Umur dimulai dari 8 s/d 20
7. Harga dimulai dari desc / asc
8. Harga range dari bebas - bebas (1  - 100000000)
9. Harus ada update delete