<template>
  <v-row align="center" class="list px-3 mx-auto">
    <v-col cols="12" md="8">
      <v-text-field v-model="name" label="Search by Client Name"></v-text-field>
    </v-col>

    <v-col cols="12" md="4">
      <v-btn small @click="searchName">
        Search
      </v-btn>
    </v-col>

    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Clients</v-card-title>

        <v-data-table
          :headers="headers"
          :items="clients"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editClient(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteClient(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

        <v-card-actions v-if="clients.length > 0">
          <v-btn small color="error" @click="removeAllClients">
            Remove All
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ClientDataService from "../services/ClientDataService";
export default {
  name: "clients-list",
  data() {
    return {
      clients: [],
      name: "",
      headers: [
        { text: "Name", align: "start", sortable: false, value: "name" },
        { text: "Email", value: "email", sortable: false },
        { text: "Phone", value: "phone", sortable: false },
        { text: "Providers", value: "providers", sortable: false },
        { text: "Actions", value: "actions", sortable: false }
      ],
    };
  },
  methods: {
    retrieveClients() {
      ClientDataService.getAll()
        .then((response) => {
          this.clients = response.data.map(this.getDisplayClient);
          console.log("clients data:", response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveClients();
    },

    removeAllClients() {
      ClientDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchName() {
      ClientDataService.findByClient(this.name)
        .then((response) => {
          this.clients = response.data.map(this.getDisplayClient);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    editClient(id) {
      this.$router.push({ name: "client-details", params: { id: id } });
    },

    deleteClient(id) {
      ClientDataService.delete(id)
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDisplayClient(client) {
      return {
        id: client.id,
        name: client.name.length > 30 ? client.name.substr(0, 30) + "..." : client.name,
        email: client.email.length > 30 ? client.email.substr(0, 30) + "..." : client.email,
        phone: client.phone,
        providers: client.providers
      };
    },
  },
  mounted() {
    this.retrieveClients();
  },
};
</script>

<style>
.list {
  max-width: 750px;
}
</style>

