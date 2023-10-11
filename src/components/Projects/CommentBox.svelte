<script lang="ts">
  import { Axios } from "@/lib/axios";

  export let id: string;
  export let getNewComment: () => void;
  let comment = "";

  const onSubmit = async () => {
    if (comment) {
      Axios.post(`/api/projects/${id}/comment`, { title: "", content: comment })
        .then(() => {
          getNewComment();
          comment = "";
        })
        .catch((err) => {
          if (err.response.status) window.location.pathname = "/login";
        });
    }
  };
</script>

<form on:submit|preventDefault={onSubmit}>
  <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
    <div class="px-4 py-2 bg-white rounded-lg">
      <textarea
        id="comment"
        rows="4"
        bind:value={comment}
        class="w-full px-4 p-2 text-sm text-gray-900 bg-white border-1 focus:ring-0"
        placeholder="Leave a comment..."
        required
      />
    </div>
    <div class="flex items-center justify-between px-3 py-2 border-t">
      <button
        type="submit"
        class="inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-retro rounded-lg hover:bg-black"
      >
        Comment
      </button>
    </div>
  </div>
</form>
