import { ClientController } from '../../../../[utils]/client/client.controller';

export class Client extends ClientController {
  public constructor() {
    super();

    this.assignListeners();
  }

  private assignListeners(): void {
    const spawnPosition = [
      247.83297729492188, -343.20001220703125, 44.4615478515625, 0, 0,
      158.7401580810547,
    ];

    on('onClientGameTypeStart', () => {
      globalThis.exports.spawnmanager.setAutoSpawnCallback(() => {
        globalThis.exports.spawnmanager.spawnPlayer(
          {
            x: spawnPosition[0],
            y: spawnPosition[1],
            z: spawnPosition[2],
            model: 'a_m_m_skater_01',
          },
          () => {
            emit('chat:addMessage', {
              args: ['Welcome to the party!~'],
            });

            SetEntityRotation(
              GetPlayerPed(-1),
              spawnPosition[3],
              spawnPosition[4],
              spawnPosition[5],
              2,
              true
            );
          }
        );
      });

      globalThis.exports.spawnmanager.setAutoSpawn(true);
      globalThis.exports.spawnmanager.forceRespawn();
    });
  }
}
