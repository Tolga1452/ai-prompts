> [!TIP]
> Use [README.md](README.md#categories) for quick navigation to the prompts.

# July 12, 2025

## Repository Updates
- Variables aren't directly added to prompts anymore. Instead, they'll be listed in the `variables.json`. All variables added after this update will use the `{{VARIABLE_NAME}}` format.
- Continuous lists are now shown as `{{ContinuousList}}`. For example `{{MODEL}}, {{MODEL}}, {{ContinuousList}}` means `{{MODEL}}, {{MODEL}}, {{MODEL}}, {{MODEL}}, ...`.
- Since tool data are common, they all are now under the `Tools` folder in the root directory of the platform folder. To see what tools are used in specific cases, there is a `tools.json` file which contains the list of the tools used along with the prompt.

## Newly Added
- ChatGPT
  - ChatGPT 4.1
  - ChatGPT 4.1-mini
  - ChatGPT 4.5
  - ChatGPT o3 (Credit to [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks))
- Claude
  - Claude Sonnet 4
- Gemini
  - Canvas **(The full prompt isn't available)**
  - Deep Research
  - Gemini 2.5 Flash
  - Gemini 2.5 Pro

## Updated
- bolt.new (Credit to [stackblitz/bolt.new](https://github.com/stackblitz/bolt.new))
- ChatGPT
  - ChatGPT 4o
  - Custom GPT
  - GPT Builder
  - Policies
  - Project
  - Task
  - Tools
- Grok
  - Grok 3
- X
  - Grok 3

# February 20, 2025
Tool data is ignored in this update because they will be re-organized in the future.

## Newly Added
- ChatGPT
  - ChatGPT o3-mini
  - ChatGPT o3-mini-high
- GitHub Copilot
  - Claude 3.5 Sonnet
  - Gemini 2.0 Flash
- Grok
  - Grok 2
  - Grok 3
- X
  - Grok 3

## Updated
- X
  - Grok 2: Updated system prompts.

# February 7, 2025

## Newly Added
- ChatGPT
  - Chain-of-Thought (OpenAI o3): Prompts for the new CoT summarizer used for the OpenAI o3 models. (Credit to [@btibor91](https://x.com/btibor91/status/1887762005181763888))
- Gemini
  - Gemini 2.0 Flash Thinking Experimental with apps **(The full prompt isn't available, PRs are welcome.)**
  - Gemini 2.0 Flash Thinking Experimental
  - Gemini 2.0 Flash
  - Gemini 2.0 Pro Experimental

## Updated
- ChatGPT
  - ChatGPT 4o: Updated system prompts.

# January 28, 2025

## Newly Added
- Gemini
  - Gem: Not very important, just a prompt template for Gems.
  - Gemini 1.5 Flash
  - Gemini 1.5 Pro with Deep Research
  - Gemini 1.5 Pro
  - Gemini 2.0 Flash Experimental
- Visual Studio Code: This category got a huge remake.
  - Added Copilot Edits with Agent and Edit sub-categories. Agent contains tool data too.
  - Updated GitHub Copilot with new Claude 3.5 Sonnet (Preview) prompt and Extensions sub-category.

## Updated
- Google Messages (Gemini): Updated system prompts.

# January 16, 2025

## Newly Added
- ChatGPT
  - ChatGPT 4o: New Custom Instructions (It was unstable and rolled back from the app)
  - ChatGPT Tasks
  - Task: The prompts and specific tools used for tasks.
- Lovable

## Updated
- GitHub Copilot (GPT 4o)
  - Updated system prompts.
- X
  - Grok 2

## Repository Updates
- Updated categories in `README.md` and added some useful labels.

# December 14, 2024

## Newly Added
- ChatGPT
  - Policies: This folder contains the policy prompts used for the `guardian_tool.get_policy` tool, which is found in project chats.
  - Project

## Updated
- ChatGPT
  - ChatGPT 4o: Projects Update
    - Updated system prompts.

# December 10, 2024

## Newly Added
- X
  - Grok 2
  - Grok 2 Fun

## Updated
- ChatGPT
  - Canvas
    - Updated the canvas prompts.
    - Moved canvas prompts from "ChatGPT 4o with canvas" to this folder since they are not specific to that model.
  - ChatGPT 4o: Canvas Update
    - Updated system prompts.
    - Updated tool data and fixed some wrong parts.
  - ChatGPT 4o with canvas
    - Updated system prompts.
    - Updated tool data and fixed some wrong parts.
  - Custom GPT: Canvas Update
    - Updated system prompts.
    - Updated tool data and fixed some wrong parts.
  - GPT Builder
    - Updated system prompts.
    - Updated tool data and fixed some wrong parts.

# December 9, 2024

## Newly Added
- X
  - Grok 2 + FLUX
  - Grok 2 + FLUX Fun

# December 6, 2024

## Newly Added
- ChatGPT
  - ChatGPT o1
  - ChatGPT o1-mini
- val town (Townie)

# November 25, 2024

## Newly Added
- bolt.new (Credit to [stackblitz/bolt.new](https://github.com/stackblitz/bolt.new))
- Claude (Claude 3.5 Sonnet)
- v0

# November 17, 2024

- **ChatGPT**
  - **ChatGPT 4o:** Updated system prompts and added tool data.
  - **ChatGPT 4o with canvas:** Added system prompts and tool data.
  - **Custom GPT:** Updated system prompts and added tool data.
  - **GPT Builder:** Updated system prompts and added tool data.
  - **Other Custom GPTs:** Removed prompts for as most of them are outdated.
- **Gemini:** Updated system prompts.
- **GitHub Copilot (GPT 4o):** Added system prompts and tool data.
- **Microsoft Copilot:** Added system prompts. Credit to [wunderwuzzi23/scratch](https://github.com/wunderwuzzi23/scratch).
