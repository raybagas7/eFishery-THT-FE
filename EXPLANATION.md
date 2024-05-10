# Explanation about my completed test

## Overview

Inilah adalah sudut pandang saya tentang cara saya melihat dan cara saya mengambil keputusan selama pengembangan aplikasi web ini

## Approach

`Setelah awal saya memikirkan tentang stack apa yang dibuat, karena ada permintaan untuk caching saya memilih react-query untuk async state dan menambahkan simple konfigurasi untuk menambahkan fitur PWA, aplikasi ini bisa diintstall pada perangkat yang browsernya mumpuni (baik desktop ataupun smartphone). Karena aplikasi dipertimbaangkan agar bisa digunakan menggunakan mobile device, saya melakukan styling mulai dari tampilan mobile (mobile first). Yang saya rasakan dalam pengembangan mobile first, rasanya lebih mudah dan lebih cepat dalam pengembangannya, karena ukuran yang kecil dapat digunakan kembali saat ukuran lebih besar, kadang tidak untuk sebaliknya. Alasan lain kenapa mobile first, karena aplikasi nya dapat saya akses langsung juga dari smartphone saya menggunakan port forwarding dari vscode`

## Tampilan sidebar

- Saya membuat sidebar yang akan muncul dari kiri ke kanan karena sidebar yang saya terapkan pada tampilan desktop juga berada di kiri, itu membuatnya konsisten.
- Membuat sidebar muncul dari kiri ke kanan untuk tampilan mobile menurut saya ini menurut pertimbangan bila orang ketika menggunakan jempol melakukan slide dari kiri ke kanan, jadi mudah digapai

## Popup mobile

- Popup mobile saya buat untuk menampilkan action yang dapat dilakukan pada setiap row komoditas, delete/update/detail
- Tidak langsung saya tempatkan pada row, karena pada tampilan mobile akan memakan banyak space
- Draggable down to close / hit backdrop!, karena saya memulai animasi popup dari bawah ke atas, maka menurut saya orang bisa berfikir kalau untuk menutupnya harus diturunkan kembali kebawah (kayak jendela? :)))

## Collapse / Accordion?

- Pada tampilan mobile saya membuat detail informasi setiap row akan dapat dilihat oleh user ketika user menekan tombol 'Collapse', detail informasi akan muncul / expanding dari atas ke bawah. Kenapa disembunyikan karena akan memakan banyak tempat dengan informasi sebanyak itu, dengan row yang banyak

## Search input

- Saya membuat search input dikombinasikan dengan select option terdiri berdasarkan kategori apa yang mau dicari, pengguna dapat memilih mulai dari komoditas, provinsi, kota, ukuran dan harga. Kenapa saya memilih kombinasi ini, karena yang saya coba dari API Stein, yang bisa saya coba setidaknya hanya search berdasarkan 1 kategori, gak multiple

## Load More

- Saya memilih infinite query untuk menampilkan row yang banyak. dengan menekan tombol 'load more' rows akan bertambah sampai akhir nya habis. kenapa saya memilih cara ini daripada infinite scroll, ini agar tidak membuat fetching terlalu banyak (saya pikir), lebih terkontrol oleh pengguna dan navigasinya jelas

## Caching

- Saya menerapkan caching pada list komoditas karena akan sangat sering bila user melakukan banyak pencarian yang berujung nantinya balik lagi dengan kombinasi/kategori search yang sama, menurut saya user juga akan lebih banyak menghabiskan waktu pada laman ini, untuk menghindari hit api kebanyakan dan membuat respon lebih cepat, saya terapkan untuk list komoditas

## Modal

- Saya banyak menerapkan modal untuk konfirmasi action dari user, untuk setiap user melakukan CRUD yang akan berpengaruh dengan data, akan saya tampilkan confirmasi terlebih dahulu biar lebih aman, gak bakal sengaja kepencet delete, atau edit

## Loading / Spinner / Ellipsis

- Saya menampilkan tanda / icon loading pada setiap action yang membutuhkan respon balik dari API, karena bisa membuat user tau bila sesuatu sedang diproses

## Title list komoditas

- Saya menerapkan title untuk setiap value property pada setiap row komoditas untuk tampilan tab -> desktop. kerena tampilan sudah lebih besar informasi dapat dibuat lebih banyak dalam 1 tampilan.
- Title saya buat sticky mengikuti layar diatas ketika user melakukan scroll, karena list akan terus bertambah makan pengguna bisa terbantu dengan title untuk mengetahui kolom apa yang sedang dia lihat

## PopOver Action

- Untuk tampilan desktop, pada tiap row, ada hamburger icon, itu merupakan action button untuk menampilkan tombol action lainnya (remove, edit, view) tujuannya sama, agar lebih simple dilihat dan tidak berantakan pada tampilan row

## Customizeable button, input with variant

- Membuat button dan input yang memiliki variant dapat mempercepat pembuatan aplikasi, button sering digunakan untuk banyak interaksi, saya membuat 3 variant (success, error, dan outline), success saya banyak gunakan untuk prosess submit karena color yang bold dan primary menyatu sama tema (hijau eFishery), error untuk menggagalkan / decline, Outline saya gunakan untuk fetching (search / load more)

## Toast

- Saya membuat styling toast dengan dua variant, (success, error), success toast akan muncul ketika user melakukan tambah, edit, atau hapus sebuah data yang berhasil agar dia tau bila yang telah dia lakukan sudah berhasil, dan error muncul untuk memberi tahu user bila action yang dia lakukan gagal

## Active nav

- Saya membuat navigasi yang aktif menandakannya dengan membuat warnanya menyatu dengan kontras tema, bold dan tambahan aksesoris kecil disebelah kiri yang membedakan dengan yang lainnya

## Conditional select

- Saya membuat select kota yang akan terhapus valuenya bila pengguna mengganti pilihan provinsinya, karena sewajarnya kota hanya ada pada provinsi yang dipilih

## Select input

- Saya membuat select auto input ketika diklik agar pengguna dapat mencari opsi yang dia inginkan lebih cepat dibandingkan dengan melakukan scroll dan dilihat satu per satu

## Disable search input

- Membuat search input disabled ketika pengguna melakukan/telah menekan tombol search, untuk menangkal fetch kebanyakan saya disable semua hingga status pending/respon telah dikembalikan

## Detail page

- Saya menggunakan kembali custom input yang sudah dibuat dengan value yang sudah ada, tapi saya buat disable, tujuannya agar konsistensi aja design antara tampilan, tambah edit dan detail komoditas karena data yang ditambahkan, edit atau dilihat sebagai detail semuanya total nya sama
