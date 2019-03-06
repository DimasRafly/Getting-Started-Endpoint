const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))

app.get('/siswa',(Request, Response)=>{
    Response.end("Menampilkan Siswa");
})

app.get('/siswa/:nama',(Request, Response)=>{
    let namaSiswa = Request.params.nama;
    Response.end("Menampilkan siswa dengan nama : " + namaSiswa);
})

app.post('/siswa',(Request, Response)=>{
    let namaSiswa = Request.body.nama;
    let alamatSiswa = Request.body.alamat;

    Response.end("Siswa baru! Nama : " + namaSiswa + ",alamat :" + alamatSiswa);
})

app.delete('/siswa/:nama',(Request,Response)=>{
    let namaSiswa = Request.params.nama;

    Response.end("Siswa bernama " + namaSiswa + " akan dihapus dari sistem!")
})

app.put('/siswa/:id',(Request,Response)=>{
    let id = Request.params.id;
    let namaSiswa = Request.body.nama;
    let alamatSiswa = Request.body.alamat;

    Response.end("Siswa dengan ID" + id + "telah terupdate");
})

app.listen('8080',(e)=>{
    console.log(e); 
})