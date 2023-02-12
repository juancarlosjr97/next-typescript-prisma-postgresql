import React, { memo } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface IClipLoader {
  isLoading: boolean;
  size?: number;
  color?: string;
  children: React.ReactNode;
}

const LoaderSpinner = (props: IClipLoader) => {
  const { size, color, isLoading, children } = props;

  if (isLoading) {
    return (
      <div data-testid="component-loading">
        <ClipLoader size={size} color={color} loading={isLoading} />{" "}
      </div>
    );
  }

  return <>{children}</>;
};

LoaderSpinner.defaultProps = {
  size: 150,
  color: "black",
  children: null,
};

export default memo(LoaderSpinner);
