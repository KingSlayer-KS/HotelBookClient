import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

function Demo(props) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root opened={props.opened} onClose={props.onClose}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Message</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>{props.text}</Modal.Body>
        </Modal.Content>
      </Modal.Root>


    </>
  );
}

export default Demo;