import http from "../http-common";

class ProviderDataService {
  getAll() {
    return http.get("/providers");
  }

  create(data) {
    return http.post("/providers", data);
  }

  update(id, data) {
    return http.put(`/providers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/providers/${id}`);
  }

}

export default new ProviderDataService();