<template>
  <div>
    <h1>Chat</h1>
    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <div class="card" style="width: 18rem;">
          <div class="card-header">Chat Room</div>
          <ul class="list-group list-group-flush">
            <li
              v-for="chatRoom in chatRooms"
              :key="chatRoom.id"
              class="list-group-item d-flex justify-content-between"
            >
              <div>{{chatRoom.name}}</div>
              <div>
                <span class="badge badge-light" v-if="chatRoom.id===currentChatRoom">current</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-8 col-sm-12">
        <div class="card border-dark mb-3" style="max-width: 100%;">
          <div class="card-header">Chat Message</div>
          <div class="card-body text-dark">
            <div class="card" v-for="chatMessage in chatMessages" :key="chatMessage.id">
              <div class="card-body">
                <h5 class="card-title">{{ chatMessage.sender.name }}</h5>
                <p class="card-text">{{ chatMessage.text }}</p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div class="card-footer bg-transparent border-dark">
            <input type="text">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  async mounted() {
    this.currentChatRoom = this.chatRooms[0].id;
    const chatMessages = await this.getChatMessage(this.currentChatRoom);
    this.chatMessages = chatMessages.data.chats;
    console.log(this.chatMessages);
  },
  data: () => ({
    currentChatRoom: "",
    chatMessages: []
  }),
  computed: {
    ...mapState("chat", ["chatRooms"])
  },
  methods: {
    ...mapActions("chat", ["getChatMessage"])
  }
};
</script>