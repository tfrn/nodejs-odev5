const http = require('http');
// createServer metodunu kullanacağız.
const server = http.createServer((req, res)=> {
    console.log('Bir istek gönderildi.'); 
    
    const url = req.url;
// index, hakkimda ve iletisim sayfaları oluşturalım.
// Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>index sayfasına hoş geldiniz. </h2>");
    } else if (url === "/hakkimda") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>hakkımda sayfasına hoş geldiniz.</h2>");
    } else if (url === "/iletisim") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>iletişim sayfasına hoş geldiniz. </h2>");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h2>404 SAYFA BULUNAMADI</h2>");
    }
    res.end();
});
// port numarası olarak 5000'i kullanalım.
const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});


