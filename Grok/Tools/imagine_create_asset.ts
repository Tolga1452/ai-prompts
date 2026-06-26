/**
 * Tool: imagine_create_asset
 *
 * Description: Upload an image or video file from the code execution sandbox as an Imagine asset. Registers the file in asset storage and returns the newly created asset_id and metadata that can be passed to other Imagine tools (e.g. imagine_image_to_image, imagine_image_to_video, imagine_reference_to_video, imagine_video_extension, render_imagine_media). Supports image/* and video/mp4 only.
 */
interface ImagineCreateAssetTool {
  file_path: string; // Path to the file to upload as an Imagine asset. Absolute path is preferred; relative paths are resolved against the sandbox working directory. Only image (PNG, JPEG, WebP, GIF, BMP) and video (MP4) files are supported.
}
