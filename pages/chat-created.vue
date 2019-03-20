<template>
  <div>
    <h1>Chat Created</h1>
    <p v-if="chats.length > 0">
      <ul>
        <li v-for="chat in chats" :key="chat.id">
          {{chat.text}}
        </li>
      </ul>
    </p>
  </div>
</template>

<script>
import chatCreated from '../graphql/chat/chatCreated'
export default {
  mounted() {
    const observer = this.$apollo.subscribe({
      query: chatCreated,
      variables: {
        chatRoom: "5c9274182c604500070ed0ba"
      }
    });

    let self = this
    
    observer.subscribe({
      next({data}) {
        console.log(data);
        self.chats.push(data.chatCreated)
      },
      error(error) {
        console.error(error);
      }
    });
  },
  data: () => ({
    chats: []
  })
};
</script>