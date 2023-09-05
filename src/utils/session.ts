import { WAClient } from "./wa";

class Session {
  client: Array<WAClient>;

  constructor() {
    this.client = [];
  }

  addClient(client: WAClient) {
    this.client.push(client);
  }

  getClient(user_id: string, client_id: string) {
    return this.client.find(
      (client) => client.user_id === user_id && client.client_id === client_id
    );
  }
}

export default Session;
