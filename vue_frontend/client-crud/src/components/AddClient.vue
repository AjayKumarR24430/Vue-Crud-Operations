<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline">Add Client</p>

    <div v-if="!submitted">
      <v-form ref="form" lazy-validation>
        <v-text-field
          v-model="client.name"
          :rules="[(v) => !!v || 'Name is required']"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="client.email"
          :rules="[(v) => !!v || 'email is required']"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          v-model="client.phone"
          :rules="[(v) => !!v || 'phone is required']"
          label="Phone"
          required
        ></v-text-field>

        <div>
          <label class="typo__label">Select Providers</label>
          <multiselect v-model="client.providers" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" 
          :rules="[(v) => !!v || 'provider is required']" required
          placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
           
          </multiselect>
        </div>

      </v-form>
      <div v-if="addProvider">
        <input
              type="text"
              class="h-10 rounded-lg outline-none p-2 mt-6"
              placeholder=" Enter Providers to add"
              v-model="provider.name"
        />
      </div>
      <div v-if="!addProvider">
        <v-btn color="success" class="mt-6" @click="newProvider">Add Providers</v-btn>
      </div>

      <div v-if="submit">
        <v-btn color="success" class="mt-6" @click="submitProvider">Post Providers</v-btn>
      </div>

      <v-btn color="primary" class="mt-3" @click="saveClient">Submit Client Details</v-btn>
      <div v-if = "error" class="mt-3">
        <span style="color:red">
          Please fill all the fields
        </span>
      </div>

    </div>

    <div v-else>
      <v-card class="mx-auto">
        <v-card-title>
          Submitted successfully!
        </v-card-title>

        <v-card-subtitle>
          Click the button to add new Client.
        </v-card-subtitle>

        <v-card-actions>
          <v-btn color="success" @click="newClient">Add</v-btn>
        </v-card-actions>
      </v-card>
    </div>

  </div>
</template>

<script>
import ClientDataService from "../services/ClientDataService";
import ProviderDataService from "../services/ProviderDataService";
import Multiselect from 'vue-multiselect';

export default {
  components: { Multiselect },
  name: "add-client",
  data() {
    return {
      client: {
        id: null,
        name: "",
        email: "",
        phone: "",
        providers: "",
      },
      provider: {
        id: null,
        name: ""
      },
      submitted: false,
      error: false,
      value: [],
      options: [],
      addprovider: false,
      submit: false
    };
  },
  methods: {
    saveClient() {
      let providers= "";
      for(let i=0;i<this.client.providers.length;i++){
        providers += this.client.providers[i].name + ", ";
      }
      var data = {
        name: this.client.name,
        email: this.client.email,
        phone: this.client.phone,
        providers: providers
      };

      console.log(data);

      ClientDataService.create(data)
        .then((response) => {
          this.client.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
          this.error = true;
        });
    },

    newClient() {
      this.submitted = false;
      this.client = {};
      this.error = false;
    },

    newProvider() {
      this.addProvider = true;
      this.submit = true;
    },

    submitProvider(){
      this.addProvider = false;
      this.submit= false;
      var data = {
        name : this.provider.name
      };

      ProviderDataService.create(data)
        .then((response) => {
          this.provider.id = response.data.id;
          this.retrieveProviders();
        })
        .catch((e) => {
          console.log(e);
        })
    },

    retrieveProviders() {
      ProviderDataService.getAll()
        .then((response) => {
          this.options = response.data.map(this.getDisplayProvider);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    getDisplayProvider(provider) {
      return {
        name:provider.name
      };
    },
  },
  
  beforeMount(){
      this.retrieveProviders();
      this.addProvider = false;
      this.submit = false;
  }


};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.submit-form {
  max-width: 300px;
}
</style>
