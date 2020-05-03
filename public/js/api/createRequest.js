/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    xhr.withCredentials = true;
    xhr.responseType = options.responseType;

    if (options.method === 'GET') {
        options.url += '?';
        for (let option in options.data) {
            options.url += `${option}=${options.data[option]}&`;
        }
    } else {
        for (let option in options.data) {
            formData.append(option, options.data[option]);
        }
    }

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if (xhr.status === 200) {
                options.callback(null, xhr.response);
            } else {
                options.callback(xhr.statusText, undefined);
            }
        }
    };

    try {
        xhr.open(options.method, options.url);
        xhr.send(formData);
    } catch (err) {
        callback(err);
    }

    return xhr;
};
