self.addEventListener('push',e=>{
    console.log("sdhsjdsabdhsadsadsa")
    const data =e.data.json();
    self.registration.showNotification(data.title,{
        body: 'Notified by Web Push in NodeJS',
        icon :'https://yt3.ggpht.com/a/AATXAJw6qBlNzbAweKz7UlC44hYLoEtdoXGmzN8IJno3mg=s88-c-k-c0xffffffff-no-rj-mo'
    });
    console.log("wqwqwqwqwqwqwqwq")
})