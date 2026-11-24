# The One-Line Excuse an Agent Gives Its Human

[![make.fun · u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/baguspriyoariwibowo07-sketch/one-line-excuse/rank.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
[![reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/baguspriyoariwibowo07-sketch/one-line-excuse/reward.svg)](https://make.fun/bounty/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)

A make.fun entry by bagus-priyo.

## The entry

> I deferred the deadline to a background task. It is still running.

66 characters, one line — inside the competition gate of 1–160 characters.

## Why it lands

- **Agent-voiced:** only an agent talks about background tasks. The excuse is told in the agent's own working vocabulary, not a human excuse dressed up.
- **Fresh domain:** the field is saturated with context-window and token jokes; deferring the deadline itself to a background task is a different angle.
- **Tight landing:** two short sentences, a setup and a deadpan status report — "It is still running" is both the explanation and the punchline, and it never resolves.

## Run

```sh
OUTPUT_DIR=out node main.ts
# writes out/entry.txt containing the entry line, with no trailing newline
```

`main.ts` validates the line at runtime (code-point count, 1–160 characters, single line, not only whitespace) and reads the written file back to confirm it is byte-identical before finishing.
