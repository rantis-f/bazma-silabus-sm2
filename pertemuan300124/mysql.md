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

### tugas
- Tabel author
CREATE TABLE `author` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nama_author` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`)
);
- Tabel rak
CREATE TABLE `rak` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nomor_rak` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`)
);
- Tabel buku
CREATE TABLE `buku` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nama_buku` VARCHAR(255) NOT NULL,
  `halaman_buku` INT NOT NULL,
  `author_id` INT,
  `rak_id` INT,
  `rilis_buku` DATE NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`author_id`) REFERENCES `author`(`id`),
  FOREIGN KEY (`rak_id`) REFERENCES `rak`(`id`)
);

# Menambahkan Data dengan Referensi Valid
INSERT INTO `author` (`nama_author`) VALUES ('JK Rowling'), ('George Orwell'),('Andrea Hirata'),('Tere Liye'),('Ilana Tan');
INSERT INTO `rak` (`nomor_rak`) VALUES ('RAK1'), ('RAK2'),('RAK3'),('RAK4'),('RAK5');

INSERT INTO `buku` (`nama_buku`, `halaman_buku`, `author_id`, `rak_id`, `rilis_buku`) VALUES
('Harry Potter', 350, 1, 1, '1997-06-26'),
('1984', 300, 2, 2, '1949-06-08'),
('Laskar Pelangi', 529, 3, 3, '2005-09-11'),
('Bumi', 440, 4, 4, '2014-01-16'),
('Sunshine Becomes You', 432, 5, 5, '2012-02-02');

SELECT
    buku.nama_buku,
    buku.rilis_buku,
    author.nama_author,
    rak.nomor_rak
FROM
    buku
JOIN author ON buku.author_id = author.id
JOIN rak ON buku.rak_id = rak.id;

DELETE FROM `author` WHERE `id` = 1;

ALTER TABLE `buku` DROP FOREIGN KEY `buku_ibfk_1`;
ALTER TABLE `buku` DROP FOREIGN KEY `buku_ibfk_2`;
ALTER TABLE `buku`
ADD CONSTRAINT `buku_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author`(`id`) ON DELETE SET NULL ON UPDATE CASCADE,
ADD CONSTRAINT `buku_ibfk_2` FOREIGN KEY (`rak_id`) REFERENCES `rak`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

- LEFT JOIN
SELECT
  buku.nama_buku,
  author.nama_author
FROM
  buku
LEFT JOIN author ON buku.author_id = author.id;

- RIGHT JOIN
SELECT
  buku.nama_buku,
  rak.nomor_rak
FROM
  buku
RIGHT JOIN rak ON buku.rak_id = rak.id;

- INNER JOIN (JOIN)
SELECT
  buku.nama_buku,
  author.nama_author,
  rak.nomor_rak
FROM
  buku
JOIN author ON buku.author_id = author.id
JOIN rak ON buku.rak_id = rak.id;

# Penjelasan
- foreign key 
berfungsi untuk mengintegrasikan data, memastikan tidak ada ada yang diduplikat, dan memastikan data valid sebelum dimasukkan ke database induk.

- Left join
Untuk menggabukan tabel. Jika tidak ada data yang sesuai, maka sebelah kanan akan null.

- Right join
Untuk menggabungkan table. jika tidak ada data yang sesuai, maka sebelah kiri akan null.

- Join
Untuk menggabungkan tabel. bisa digunakan lebih dari satu.

Mungkin hanya sekian video dan penjelasan yang dapat berikan. Terima kasih sudah menonton video ini.
