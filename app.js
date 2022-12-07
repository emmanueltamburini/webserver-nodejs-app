import http from "http";

http.createServer((req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename=list.csv')
    res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('id, name\n');
    res.write('1, name1\n');
    res.write('2, name2\n');
    res.write('3, name3\n');
    res.write('4, name4\n');
    res.end();
})
.listen(8080);

console.log('Listing the port', 8080);