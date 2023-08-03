import React from "react";

interface SkeletonProps {
  count: number;
  width: string | number | null;
  wrapper: React.ElementType | null;
  height: string | number | null;
  circle: boolean;
  margin: string | number;
}

export const Skeleton = ({
  count,
  width,
  wrapper: Wrapper,
  height,
  circle,
  margin,
}: SkeletonProps) => {
  const elements: JSX.Element[] = [];

  for (let i = 0; i < count; i++) {
    const style: React.CSSProperties = {
      margin: margin || 0, // Provide a default value for margin if it is not provided
    };

    if (width !== null) {
      style.width = width;
    }

    if (height !== null) {
      style.height = height;
    }

    if (width !== null && height !== null && circle) {
      style.borderRadius = "100%";
    }

    elements.push(
      <span key={i} className="skeleton" style={style}>
        &zwnj;
      </span>
    );
  }

  return (
    <span>
      {Wrapper
        ? elements.map((element, i) => (
            <Wrapper key={i}>
              {element}
              &zwnj;
            </Wrapper>
          ))
        : elements}
    </span>
  );
};

Skeleton.defaultProps = {
  count: 1,
  width: null,
  wrapper: null,
  height: null,
  circle: false,
  margin: 0,
};
