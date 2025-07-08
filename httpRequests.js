import fetch from 'node-fetch';

export async function sendGet(path) {

    try { 

    const res = await fetch(path);

    const data = await res.json();

    return data;

    } catch(err) {return err}
}

  
