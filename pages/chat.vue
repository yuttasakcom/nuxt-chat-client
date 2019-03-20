<template>
  <div>
    <h1>Chat</h1>
    <div class="row">
      <div class="col-lg-4 col-sm-12">
        <div class="card" style="width: 18rem;">
          <div class="card-header">Chat Room</div>
          <ul v-if="chatRooms && chatRooms.length > 0" class="list-group list-group-flush">
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
            <div v-if="chatMessages && chatMessages.length > 0" class="card">
              <div class="card-body" v-for="chatMessage in chatMessages" :key="chatMessage.id">
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
import chatCreated from "../graphql/chat/chatCreated";

export default {
  async mounted() {
    if (this.chatRooms.length > 0) {
      this.currentChatRoom = this.chatRooms[0].id;
      const chatMessages = await this.getChatMessage(this.currentChatRoom);
      this.chatMessages = chatMessages.data.chats;
    }
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
  },
  apollo: {
    // Subscriptions
    $subscribe: {
      // When a tag is added
      chatCreated: {
        query: chatCreated,
        // Reactive variables
        variables() {
          // This works just like regular queries
          // and will re-subscribe with the right variables
          // each time the values change
          return {
            chatRoom: this.currentChatRoom
          };
        },
        // Result hook
        result({data}) {
          console.log(data);
          this.chatMessages.push(data.chatCreated)
        }
      }
    }
  }
};
</script>