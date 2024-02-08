require 'swagger_helper'

RSpec.describe 'api/v1/engineers', type: :request do
  let(:user) { create(:user) }
  let(:engineer) { create(:engineer) }
  before do
    login_as(user)
    engineer
  end

  # rubocop:disable Metrics/BlockLength
  path '/api/v1/engineers' do
    get('list engineers') do
      response(200, 'successful') do
        # let(:Authorization) { "Bearer #{Base64.strict_encode64('jsmith:jspass')}" }
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    post('create engineer') do
      # You'll want to customize the parameter types...
      consumes 'application/json'
      parameter name: :engineer, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          photo: { type: :string },
          consultancy_fee: { type: :float },
          speciality: { type: :string },
          about: { type: :string }
        },
        required: %w[name photo consultancy_fee speciality about]
      }

      response(201, 'successful') do
        let(:engineer) { { name: 'John Doe', photo: 'https://example.com/photo.jpg', consultancy_fee: 100.0, speciality: 'Software Engineer', about: 'I am a software engineer' } }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end

  path '/api/v1/engineers/{id}' do
    # You'll want to customize the parameter types...
    parameter name: 'id', in: :path, type: :string, description: 'id'

    get('show engineer') do
      produces 'application/json'
      request_body_example value: { some_field: 'Foo' }, name: 'basic', summary: 'Request example description'
      response(200, 'successful') do
        schema type: :object,
               properties: {
                 id: { type: :integer },
                 name: { type: :string },
                 photo: { type: :string },
                 consultancy_fee: { type: :float },
                 speciality: { type: :string },
                 about: { type: :string }
               },
               required: %w[id name photo consultancy_fee speciality about]

        let(:id) { engineer.id }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    delete('delete engineer') do
      response(200, 'successful') do
        let(:id) { engineer.id }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end
end
# rubocop:enable Metrics/BlockLength
