import { queryClient } from "next/data-client"
import React, { useState } from "react"
import { useMutation, useQueryClient } from "react-query"

const NewTweetForm = () => {
  const queryClient = useQueryClient()

  const [form, update] = useState({
    title: "",
    body: "",
  })

  const { mutate } = useMutation(
    () => {
      return fetch("kokoro-task/app/api/Tweet/tweet.ts", {
        method: "POST",
        body: JSON.stringify(form),
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("tweets")
      },
    }
  )
  const saveTweet = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    update({ title: "", body: "" })

    mutate()
  }

  return (
    <form
      onSubmit={saveTweet}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label>
        <p>title</p>
        <input
          type="text"
          id="title"
          value={form.title}
          onChange={(e) => update({ ...form, title: e.target.value })}
        />
      </label>
      <label>
        <p>body</p>
        <textarea
          id="body"
          value={form.body}
          onChange={(e) => update({ ...form, body: e.target.value })}
        />
      </label>
      <button>save</button>
    </form>
  )
}

export default NewTweetForm
