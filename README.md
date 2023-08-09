### Todo List App Mock Test

#### Jawaban :
1. Apakah Kegunaan JSON pada REST API?
   - Kegunaan JSON (JavaScript Object Notation) pada REST API adalah sebagai format untuk bertukar data client dan server atau antar aplikasi
2. Jelaskan bagaimana REST API bekerja
   - Cara kerja REST API adalah REST (REpresentational STate) client akan mengakses data/resource ke REST server dimana masing-masing resource atau data tersebut dibedakan oleh sebuah global ID atau URIs (Universal Resource Identifiers) dan data yang dihasilkan bisa dikirimkan dalam bentuk format text, JSON atau XML.
  
  #### Repository :
  - Front End 
  `https://github.com/Faiznurfaza/mocktest-fsw-binar-client`
  - Back End
  `https://github.com/Faiznurfaza/mocktest-fsw-binar-server`

  #### Deployment Website :
  `https://mocktest-fsw-faiz.vercel.app/`

  #### Deskripsi Fitur
  Aplikasi yang dibuat dalam mock test ini adalah sebuah website/aplikasi untuk mendaftarkan/mencatat yang perlu dilakukan (To-do list app)

  Berikut fitur yang tersedia :
  - User dapat login dengan 4 digit angka, data yang bisa digunakan untuk login :
  `password: 1234`,`password:2345`,`password:3456`
  - User dapat menambahkan to-do list dengan menginputkan sesuatu ke form kemudian tekan `Add List`
  - User juga dapat mengedit dan  menghapus to-do list yang sudah ada dengan mengklik tombol yang sesuai di samping to-do list (Edit untuk mengedit, delete untuk menghapus)
  - User dapat logout dengan mengklik tombol `Logout` di navigasi bar

#### Informasi Tambahan
Server yang digunakan untuk database berada di US, jadi mohon dimaafkan misal response nya agak lambat.