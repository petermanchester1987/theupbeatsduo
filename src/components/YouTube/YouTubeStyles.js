import styled from "styled-components"

export const YouTubeStyles = styled.section`

.container {
  max-width: 500px;
  padding: 10px;
}

.videoRatio {
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
}

.videoInner {
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

.thumbnailButton {
  @extend .videoInner;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: block;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.thumbnailImage {
  width: 100%;
}

.playIcon {
  height: 42px;
  left: calc(50% - 30px);
  position: absolute;
  top: calc(50% - 21px);
  transition: all 0.3s ease-in-out;
  width: 60px;
  fill: white !important;
}

`