import UserUpdateForm from "@/features/User/components/UserUpdateForm";
import Container from "@/shared/components/UI/Container";

const ProfileTab = () => {
  return (
    <Container className="block">
      <div className="flex flex-col gap-12 mb-section">
        <div className="border border-main bg-gray-light py-4 px-5">
          <h4 className="text-h5">Личные данные</h4>
        </div>
        <UserUpdateForm />
      </div>
      <div className="flex flex-col gap-12 my-section">
        <div className="border border-main bg-gray-light py-4 px-5">
          <h4 className="text-h5">Изменить пароль</h4>
        </div>
      </div>
    </Container>
  );
};

export default ProfileTab;
