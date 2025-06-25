"use client";
import React, { useMemo, useEffect } from 'react';
import feather from 'feather-icons';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
    size?: number | string;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
    const iconHtml = useMemo(() => {
        if (feather.icons[name]) {
            return { __html: feather.icons[name].toSvg(props) };
        }
        return { __html: '' };
    }, [name, props]);

    useEffect(() => {
        feather.replace();
    }, [iconHtml]);

    return <i dangerouslySetInnerHTML={iconHtml} />;
};

export default Icon;