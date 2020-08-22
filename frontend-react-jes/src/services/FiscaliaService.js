import axios from 'axios';

export class FiscaliaService {
    baseUrl = "http://localhost:8888/api/fiscalia";

    getAll() {
        return axios.get(this.baseUrl).then(res => res.data);
    }

    save(fiscalia) {
        return axios.post(this.baseUrl, fiscalia).then(res => res.data);
    }

    update(id,fiscalia) {
        return axios.put(this.baseUrl + "/" + id, fiscalia).then(res => res.data);
    }

    delete(id) {
        return axios.delete(this.baseUrl + "/" + id).then(res => res.data);
    }
}