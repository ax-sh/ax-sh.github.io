import { List } from '../components/List';
import { IconWithToolTip } from '@ax-sh.github.io/common';

export default function Skills() {
  const iconProps = { size: 30 };
  return (
    <section className={'py-4 bg-[#0A0A0F]'}>
      <div className={'container'}>
        <div className={'skills flex flex-col gap-2 py-4'}>
          <div>Proficient in</div>
          <List className={'flex gap-4'}>
            <IconWithToolTip name={'git'} {...iconProps} />
            <IconWithToolTip name={'javascript'} {...iconProps} />
            <IconWithToolTip name={'typescript'} {...iconProps} />
            <IconWithToolTip name={'nodejs'} {...iconProps} />
            <IconWithToolTip name={'python'} {...iconProps} />
            <IconWithToolTip name={'bash'} {...iconProps} />
          </List>
        </div>
        <List className={'flex gap-3 flex-wrap'}>
          <IconWithToolTip name={'react.js'} {...iconProps} />
          <IconWithToolTip name={'next.js'} {...iconProps} />
          <IconWithToolTip name={'tailwind'} {...iconProps} />
          <IconWithToolTip name={'mui'} {...iconProps} />
          {/*<IconWithToolTip name={'bootstrap'} {...iconProps} />*/}
          <IconWithToolTip name={'redux'} {...iconProps} />
          <IconWithToolTip name={'redux.saga'} {...iconProps} />
          <IconWithToolTip name={'graphql'} {...iconProps} />
          <IconWithToolTip name={'apollo.graphql'} {...iconProps} />
          <IconWithToolTip name={'three.js'} {...iconProps} />
          <IconWithToolTip name={'nx'} {...iconProps} />
          <IconWithToolTip name={'ant.design'} {...iconProps} />
          <IconWithToolTip name={'d3'} {...iconProps} />
        </List>
      </div>
    </section>
  );
}
