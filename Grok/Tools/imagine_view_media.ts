/**
 * Tool: imagine_view_media
 *
 * Description: Inspect a single Imagine media asset by UUID. Returns the asset's stored description when one exists; otherwise downloads and returns the raw media content so the model can view it.
 */
interface ImagineViewMediaTool {
  asset_id: string; // Asset ID (UUID) to view.
}
