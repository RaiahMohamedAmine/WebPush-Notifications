const publicVapidKey='BHfOjsIZ8VMKysiK2dZDz6AWMAcg1d887otTT-UQUIKYTY_DeQbg1tOYHXsWWCLlhy1DFSCgX4koh0Z_mLjJUfI';
function sendNotification () {
    if ('serviceWorker' in navigator){
        send().catch(err=> console.error(err));
    }
    else{
        alert ('Sorry an Error Accured');
    }
}

async function send (){
    console.log("Regestring Server Worker ...");
    const register = await navigator.serviceWorker.register('/worker.js',{
        scope :'/'
    });
    console.log("Server Worker Registered");

    console.log("Regestring Push ...");
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly :true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
    console.log("Push Registered");

    console.log("Sending Push ...");

    await fetch('/test',{
        method:'POST',
        body :JSON.stringify(subscription),
        headers :{
            'content-type' :'application/json'
        }
    });
    console.log("Notication Sent");  

}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }