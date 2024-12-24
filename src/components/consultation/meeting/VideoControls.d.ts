interface VideoControlsProps {
    isMuted: boolean;
    isVideoEnabled: boolean;
    onToggleMute: () => void;
    onToggleVideo: () => void;
    onEndCall: () => void;
}
export declare function VideoControls({ isMuted, isVideoEnabled, onToggleMute, onToggleVideo, onEndCall }: VideoControlsProps): any;
export {};
