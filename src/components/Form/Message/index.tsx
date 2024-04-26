import SimpleRichText from '../../../blocks/SimpleRichText'
import { Width } from '../Width'

export const Message: React.FC = ({ message }: any) => {
  return (
    <Width width="100">
      <SimpleRichText content={message} />
    </Width>
  )
}
