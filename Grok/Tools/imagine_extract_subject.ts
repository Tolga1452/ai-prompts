/**
 * Tool: imagine_extract_subject
 *
 * Description: Extract (isolate) the main subject of an existing image into an RGBA PNG cutout with a transparent background, keeping the subject's ORIGINAL pixels intact. This capability is powered by Grok Imagine.

Use this tool when the user asks to isolate/extract/cut out a subject, make a sticker or transparent cutout, or "remove the background" — whenever the goal is to keep the real subject exactly as it appears and drop everything else. Prefer this over imagine_remove_background: it preserves the original subject pixels instead of re-drawing them, so fine detail (fur, edges, logos) and likeness are retained.

To keep one specific subject when several are present, pass `subject`. Otherwise the most prominent subject is kept.

The returned `asset_id` is a registered Imagine asset that can be used directly with other tools (e.g. render_imagine_media, imagine_view_media, imagine_image_to_image, imagine_image_to_video). The cutout is also saved to the returned `file_path` in the sandbox.
 */
interface ImagineExtractSubjectTool {
  asset_id: string; // The asset ID (UUID) of the image to extract the subject from, as returned by other imagine tools.
  subject?: string | null; // Optional. A short noun phrase naming the subject to keep, exactly as it appears in the image (e.g. 'the dog', 'the whistle on the left'). Do NOT include instructions ('remove', 'cut out') or mention the background. Omit unless the image has multiple distinct subjects and the user singled one out; when omitted, the most prominent subject is kept.
}
