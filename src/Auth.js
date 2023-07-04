const getAccessToken = async () => {
    const raw = "scope=global&grant_type=password&username=ESTRA\\Administrator&password=!Q@W3e4r";

    const echoPostRequest = {
        url: 'http://10.10.115.153/sit-auth/OAuth/Token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW'
        },
        mode: 'raw',
        body: raw
    };

    try {
        const response = await fetch(echoPostRequest.url, {
            method: echoPostRequest.method,
            headers: echoPostRequest.headers,
            body: echoPostRequest.body
        });

        if (!response.ok) {
            throw new Error(response.status);
        }

        const data = await response.json();

        return data.access_token;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export { getAccessToken };