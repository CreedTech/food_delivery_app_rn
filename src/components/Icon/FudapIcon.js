import { View, Text } from "react-native";
import React from "react";
import Svg, { Path, Rect, Defs, Pattern, Use, Image } from "react-native-svg";
import { COLORS } from "../../utils";

const FudapIcon = (props) => {
  let width = props?.width || 20;
  let height = props?.height || 20;
  let color = props?.color || COLORS.black;
  return (
    <Svg
      width="226"
      height="187"
      viewBox="0 0 226 187"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Rect width="226" height="187" fill="url(#pattern0)" fill-opacity="0.9" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <Use
            xlinkHref="#image0_5_144"
            transform="translate(0 -0.104278) scale(0.00277778 0.0033571)"
          />
        </Pattern>
        <Image
          id="image0_5_144"
          width="360"
          height="360"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoCAYAAAB65WHVAAAACXBIWXMAAC4jAAAuIwF4pT92AABGHmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU0OTExLCAyMDEzLzEwLzI5LTExOjQ3OjE2ICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAyMC0wMy0wM1QyMDowNDowNFo8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDIwLTAzLTAzVDIwOjIxOjI4WjwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjAtMDMtMDNUMjA6MjE6MjhaPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpUZXh0TGF5ZXJzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxwaG90b3Nob3A6TGF5ZXJOYW1lPmZ1ZGFwPC9waG90b3Nob3A6TGF5ZXJOYW1lPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyVGV4dD5mdWRhcDwvcGhvdG9zaG9wOkxheWVyVGV4dD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyTmFtZT5mdWRhcCBjb3B5PC9waG90b3Nob3A6TGF5ZXJOYW1lPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyVGV4dD5mdWRhcDwvcGhvdG9zaG9wOkxheWVyVGV4dD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyTmFtZT5mdWRhcDwvcGhvdG9zaG9wOkxheWVyTmFtZT4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllclRleHQ+ZnVkYXA8L3Bob3Rvc2hvcDpMYXllclRleHQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllck5hbWU+ZnVkYXAgY29weTwvcGhvdG9zaG9wOkxheWVyTmFtZT4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllclRleHQ+ZnVkYXA8L3Bob3Rvc2hvcDpMYXllclRleHQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllck5hbWU+ZnVkYXA8L3Bob3Rvc2hvcDpMYXllck5hbWU+CiAgICAgICAgICAgICAgICAgIDxwaG90b3Nob3A6TGF5ZXJUZXh0PmZ1ZGFwPC9waG90b3Nob3A6TGF5ZXJUZXh0PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxwaG90b3Nob3A6TGF5ZXJOYW1lPmZ1ZGFwIGNvcHk8L3Bob3Rvc2hvcDpMYXllck5hbWU+CiAgICAgICAgICAgICAgICAgIDxwaG90b3Nob3A6TGF5ZXJUZXh0PmZ1ZGFwPC9waG90b3Nob3A6TGF5ZXJUZXh0PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6QmFnPgogICAgICAgICA8L3Bob3Rvc2hvcDpUZXh0TGF5ZXJzPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmE5YzdlYjAzLWI1YTctN2M0Yy1iOGViLTNkMDMxNTUxYjliZjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpjZGNiNTg2MS1mZmVlLTRjNDAtYjY0YS05MjFhNGQyYzdkMGQ8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpmMDQyZWI2ZC1lMmZlLWM2NGUtYjY4ZS1kMmYwNzZjY2ViNDM8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ZjA0MmViNmQtZTJmZS1jNjRlLWI2OGUtZDJmMDc2Y2NlYjQzPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIwLTAzLTAzVDIwOjA0OjA0Wjwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YWVmZGZmYjEtY2FmNS04NTQxLWFlYzYtYjIzMTVkZmI0ZjVmPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIwLTAzLTAzVDIwOjIwOjA2Wjwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ZWJjY2VjYzUtNjE5OC04ZjQ1LTljOTEtNTFkNDIwMWI1ZmY4PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIwLTAzLTAzVDIwOjIxOjI4Wjwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+ZGVyaXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5jb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YTljN2ViMDMtYjVhNy03YzRjLWI4ZWItM2QwMzE1NTFiOWJmPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIwLTAzLTAzVDIwOjIxOjI4Wjwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8eG1wTU06RGVyaXZlZEZyb20gcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICA8c3RSZWY6aW5zdGFuY2VJRD54bXAuaWlkOmViY2NlY2M1LTYxOTgtOGY0NS05YzkxLTUxZDQyMDFiNWZmODwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpjZGNiNTg2MS1mZmVlLTRjNDAtYjY0YS05MjFhNGQyYzdkMGQ8L3N0UmVmOmRvY3VtZW50SUQ+CiAgICAgICAgICAgIDxzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpmMDQyZWI2ZC1lMmZlLWM2NGUtYjY4ZS1kMmYwNzZjY2ViNDM8L3N0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPC94bXBNTTpEZXJpdmVkRnJvbT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+MzAwMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+MzAwMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzYwPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjM2MDwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNr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"
        />
      </Defs>
    </Svg>
  );
};

export default FudapIcon;
